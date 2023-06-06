import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import type { BaseLanguageModel } from 'langchain/dist/base_language';
import { DynamicTool, Tool } from 'langchain/tools';
import { OpenAI } from 'langchain/llms/openai';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { CommandExecutorTool } from 'src/ai/tools/command-executor';
import {
  LANGCHAIN_COMMAND_AGENT_TOKEN,
  OPEN_AI_MODEL_PROVIDER_TOKEN,
} from 'src/decorators/providers';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: OPEN_AI_MODEL_PROVIDER_TOKEN,
      useValue: new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' }),
    },
    {
      provide: LANGCHAIN_COMMAND_AGENT_TOKEN,
      useFactory: (tools: Tool[], model: BaseLanguageModel) =>
        initializeAgentExecutorWithOptions(tools, model, {
          agentType: 'zero-shot-react-description',
        }),
      inject: ['LANGCHAIN_TOOLS', OPEN_AI_MODEL_PROVIDER_TOKEN],
    },
    {
      provide: 'COMMAND_EXECUTOR_TOOL',
      useValue: CommandExecutorTool,
    },
    {
      provide: 'LANGCHAIN_TOOLS',
      useFactory: (...tools: DynamicTool[]) => tools,
      inject: ['COMMAND_EXECUTOR_TOOL'],
    },
  ],
  exports: [LANGCHAIN_COMMAND_AGENT_TOKEN],
})
export class LangChainModule {}
