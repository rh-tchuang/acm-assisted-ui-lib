import { IRow } from '@patternfly/react-table';
import { Cluster, V2ClusterUpdateParams, ClusterValidationId } from '../api/types';
import { Validation as HostValidation } from './hosts';
export type Validation = Omit<HostValidation, 'id'> & {
  id: ClusterValidationId;
};
export type ValidationGroup =
  | 'configuration'
  | 'hostsData'
  | 'hosts-data'
  | 'network'
  | 'operators';
export type ValidationsInfo = {
  [key in ValidationGroup]?: Validation[];
};
export type ClusterWizardStepStatusDeterminationObject = {
  status: Cluster['status'];
  validationsInfo?: Cluster['validationsInfo'] | ValidationsInfo;
};
export type ClusterTableRows = IRow[];
export type HostSubnet = {
  subnet: string;
  hostIDs: string[];
  humanized: string;
};
export type HostSubnets = HostSubnet[];
export type NetworkConfigurationValues = V2ClusterUpdateParams & {
  hostSubnet?: string;
  useRedHatDnsService?: boolean;
  managedNetworkingType: 'userManaged' | 'clusterManaged';
  enableProxy: boolean;
  editProxy: boolean;
};
export type HostDiscoveryValues = V2ClusterUpdateParams & {
  useExtraDisksForLocalStorage: boolean;
  useContainerNativeVirtualization: boolean;
  usePlatformIntegration: boolean;
  schedulableMasters: boolean;
};
export enum CpuArchitecture {
  x86 = 'x86_64',
  ARM = 'arm64',
}
