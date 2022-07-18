import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from '../fixtures/clients-data';

describe('filterClients', () => {
  test('should filter only INTERNAL clients for INTERNAL type', () => {

  });

  test('should filter only EXTERNAL clients for EXTERNAL type', () => {

  });

  test('should all clients filtered out by types have same length as all clients', () => {

  });

  test('should return empty array when no clients exists and filtering by type', () => {

  });

  test('should return all clients if no filter specified', () => {

  });
});

describe('getLatestRegisteredClient', () => {
  test('should return user with last registration date', () => {

  });

  test('should return undefined for empty clients array', () => {

  });

  test('should return first client in order if we have multiple entries with same date', () => {

  });
});
