import { ParsedQs } from 'qs';

export function getSortOrder(sortOrder: string | string[] | ParsedQs | ParsedQs[]): string {
  if (typeof sortOrder === 'string') {
    return sortOrder.toUpperCase();
  }
  return 'ASC';
}