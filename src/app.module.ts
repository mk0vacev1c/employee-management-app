import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employees/employees.controller';
import { EmployeeService } from './employees/employee.service';
import { EmployeeSchema } from './employees/employee.schema';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/employee-management-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeeService],
})
export class AppModule {}
