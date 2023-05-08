import { Module } from '@nestjs/common';

import { LangChainModule } from 'src/langchain.module';
import { AppService } from './app.service';

@Module({
  imports: [LangChainModule],
  providers: [AppService],
})
export class AppModule {}
