import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAllUsers() {
    return { g: ['please', 9, 'k', 0] };
  }
  @Post()
  createBody(@Body() user: {}) {
    return user;
  }
}
