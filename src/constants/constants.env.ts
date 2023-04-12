import { _env } from '../utils/misc';

export const PREFIX = '/api/';
export const MOCKED_PREFIX = PREFIX + 'mock/';
export const MOCKED_API = _env('MOCKED_API');
export const API_PREFIX = MOCKED_API ? MOCKED_PREFIX : PREFIX;