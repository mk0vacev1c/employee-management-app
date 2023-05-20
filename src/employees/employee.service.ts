import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './employee.interface';
import { CreateEmployeeDto, UpdateEmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) {}

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const employees = await this.employeeModel
      .find({ deletedAt: null })
      .skip(skip)
      .limit(limit)
      .exec();
    const total = await this.employeeModel.countDocuments({ deletedAt: null }).exec();
    return { employees, total };
  }

  async findOne(id: string) {
    const employee = await this.employeeModel.findOne({ _id: id, deletedAt: null }).exec();
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeModel.findOneAndUpdate({ _id: id, deletedAt: null }, updateEmployeeDto, {
      new: true,
    }).exec();
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async remove(id: string) {
    const employee = await this.employeeModel.findOneAndUpdate({ _id: id, deletedAt: null }, { deletedAt: new Date() }).exec();
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async findDeleted() {
    return this.employeeModel.find({ deletedAt: { $ne: null } }).exec();
  }
}