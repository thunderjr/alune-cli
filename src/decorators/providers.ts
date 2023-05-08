import { Inject } from '@nestjs/common';

export const OPEN_AI_MODEL_PROVIDER_TOKEN = 'OPEN_AI_MODEL_PROVIDER';
export const InjectOpenAI = () => Inject(OPEN_AI_MODEL_PROVIDER_TOKEN);

export const LANGCHAIN_COMMAND_AGENT_TOKEN = 'LANGCHAIN_COMMAND_AGENT';
export const InjectCommandAgent = () => Inject(LANGCHAIN_COMMAND_AGENT_TOKEN);
