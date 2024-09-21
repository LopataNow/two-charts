import axios from "axios";

const API_URL = "https://api.ukhsa-dashboard.data.gov.uk";

export interface Data{
    date: string;
    metric_value: number;
}

export interface DataResponse<T>{
    data: {
        count: number;
        results: T[];
    };
}

export function getDeathsONSByDay(): Promise<DataResponse<Data>> {
    return axios.get(`${API_URL}/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_deaths_ONSRollingMean`);
}

export function getCasesByDay(): Promise<DataResponse<Data>> {
    return axios.get(`${API_URL}/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay`);
}

export async function getTestingPCRCount(): Promise<DataResponse<Data>> {
    return axios.get(`${API_URL}/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCR_countByDay`);
}

export async function getTestesVsCases() {
    const cases = await getCasesByDay();
    const tests = await getTestingPCRCount();

    return [
        {
            type: "Cases",
            value: cases.data.results.reduce((acc: number, curr: Data) => acc+curr.metric_value, 0),
        },
        {
            type: "Tests",
            value: tests.data.results.reduce((acc: number, curr: Data) => acc+curr.metric_value, 0),
        },
    ];
}
