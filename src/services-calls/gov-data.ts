import axios from "axios";

const API_URL = "https://api.ukhsa-dashboard.data.gov.uk";

export function getCountRollingMean() {
    return axios.get(`${API_URL}/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_countRollingMean`);
}

/*
Topics:
cases cases By Day
cases count Rolling Mean
cases lineage Percent By Week
cases rate Rolling Mean
deaths ONS By Day
deaths ONS RegBy Week
deaths ONS Rolling Mean
healthcare admission By Day
healthcare admission Rolling Mean
healthcare occupied Beds By Day
healthcare occupied Beds Rolling Mean
testing PCR count By Day
testing positivity 7 Day Rolling
vaccinations autumn22 doses By Day
vaccinations autumn22 uptake By Day
vaccinations autumn23 doses By Day
vaccinations autumn23 uptake By Day
vaccinations spring23 doses By Day
vaccinations spring23 uptake By Day
vaccinations spring24 doses By Day
vaccinations spring24 uptake By Day
*/
