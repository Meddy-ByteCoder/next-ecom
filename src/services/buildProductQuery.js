export default function buildProductQuery({ filters, sort, pageSize = 30, currentPage = 1 }) {
  // Start constructing the query
  const queryStart = `
      query GetProducts($filters: ProductAttributeFilterInput, $pageSize: Int = 30, $currentPage: Int = 1,$sort:ProductAttributeSortInput) {
        products(
          search: ""
          filter: $filters
          pageSize: $pageSize
          currentPage: $currentPage
          sort:$sort
        ) {
          total_count
          aggregations {
            attribute_code
            count
            label
            options {
              count
              label
              value
            }
            position
          }
          items {
            ... on SimpleProduct {
              __typename
              name
              sku
              warranty_title
              parent_sku
              discount_percentage
              is_prebook_product
              prebook_price
              prebook_launch_date
              prebook_end_date
              vsp
              is_prebook_partial_payment
              short_description {
                html
              }
              price_range {
                maximum_price {
                  final_price {
                    currency
                    value
                  }
                }
              }
              image {
                label
                url
              }
              is_sponsored_product
              mrp
              vs_label
              label_1
              label_2
              label_3
              url_key
              start_date_of_deal
              end_date_of_deal
              rating_summary
              type_id
            }
          }
        }
      }
    `;

  // Generate variables object for filters
  const variables = {
    filters: {},
    pageSize: pageSize,
    currentPage: currentPage,
    sort: { ...sort }
  };


  for (const [key, value] of Object.entries(filters)) {
    if (value instanceof String && value.includes(",")) {
      variables.filters[key] = { in: value.split(",").map((v) => v.trim()) };
    } else {
      variables.filters[key] = { in: value };
    }
  }

  variables.filters.is_child = { eq: "1" };


  return { query: queryStart, variables };
}