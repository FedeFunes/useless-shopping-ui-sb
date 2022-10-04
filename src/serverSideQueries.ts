import { ApolloClient } from "@apollo/client";
import menuCategoriesQuery from "apollo/queries/menuCategoriesQuery";

export default function serverSideQueries(
  apolloClient: ApolloClient<never>,
): Promise<void> {
  return Promise.all([
    apolloClient.query({
      query: menuCategoriesQuery,
      variables: {
        postalCode: "",
      },
    }),
  ]).then(() => {
    // Ignore results
  });
}
