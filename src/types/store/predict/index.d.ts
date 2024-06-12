declare namespace Types {
  interface IJobOpportunityResponse {
    historical: number[];
    prediction: number[];
  }
  interface IPredictState {
    actionType: string;
    loading: boolean;
    jobOpportunity: number[];
    label: string;
  }
}
