<img width="256" height="256" src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt980498ed37e23691/5ff61c6f396e65084a9e9115/7_Gift_from_Beyond_03MT215_Card_Art.png" />

# Alune

Alune is an AI-powered toolchain designed to help users navigate their daily tasks with ease by leveraging the power of their computer environment. Currently in development, this app aims to channel the supportive and empowering spirit of Alune, inspired by the character from League of Legends, guiding you as you conquer your daily challenges. Alune is a CLI tool, with plans to evolve into a web app in the future.

## Features

- AI integration: Harness the power of AI to assist you in your daily tasks and decision-making
- Environment automation: Leverage your computer environment to automate and streamline tasks
- Customizable toolchain: Tailor the toolchain to your specific needs and preferences
- CLI tool: Utilize the command line interface for efficient interaction and control
- **[TODO]** Task management: Organize and prioritize your daily tasks and long-term goals

## Example

Here's a snippet of code demonstrating how to use the AI assistant:

```typescript
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
```

This example shows how to create an injectable service using Nest.js, which uses the AI-powered `commandRunnerAgent` to process user input and return a response.
