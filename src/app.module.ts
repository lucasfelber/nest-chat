import { Module } from '@nestjs/common';
import * as modules from './modules'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Room } from './modules/room/room.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    ...Object.values(modules)
  ],
})
export class AppModule {}
