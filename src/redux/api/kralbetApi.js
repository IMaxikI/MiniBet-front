import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kralbetApi = createApi({
    reducerPath: 'kralbetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/',
    }),
    endpoints: (builder) => ({
        getKralbetData: builder.query({
            query: () => '/dataBet.php',
            keepUnusedDataFor: 60,
        }),
    }),
});

export const { useGetKralbetDataQuery } = kralbetApi;