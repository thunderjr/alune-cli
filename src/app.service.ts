import type { ChainValues } from 'langchain/dist/schema';
import type { AgentExecutor } from 'langchain/agents';
import { Injectable } from '@nestjs/common';

import { InjectCommandAgent } from 'src/decorators/providers';

@Injectable()
export class AppService {
  constructor(
    @InjectCommandAgent() private readonly commandRunnerAgent: AgentExecutor,
  ) {}

  promptAi(input: string): Promise<ChainValues> {
    return this.commandRunnerAgent.call({
      input,
    });
  }
}
