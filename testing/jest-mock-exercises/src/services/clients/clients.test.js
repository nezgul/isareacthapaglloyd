// Dopisz pozostałe testy!

import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';
import { clients } from '../../fixtures/clients-data';

jest.mock('./clients-data', () => ({
  getClients: jest.fn()
}));

describe('filterClients', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should filter only INTERNAL clients for INTERNAL type', async () => {
    getClientsMock.mockResolvedValue(clients);

    const actual = await filterClients({
      type: 'INTERNAL',
    });

    expect(actual).toEqual([
      { name: 'Jan', type: 'INTERNAL', registered: new Date(2019, 4, 12) },
      { name: 'Maria', type: 'INTERNAL', registered: new Date(2018, 3, 11) },
      { name: 'Janina', type: 'INTERNAL', registered: new Date(2019, 11, 3) },
    ]);
  });

  test('should return empty clients when empty list fetched', async () => {

  });

  test('should return empty list when fetching clients failed', async () => {

  });

  test('should log error when fetching clients failed', async () => {

  });

  test('should not log error when fetching clients successful', async () => {

  });
});
