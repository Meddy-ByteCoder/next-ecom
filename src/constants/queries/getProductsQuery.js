export const GET_PRODUCTS_BY_CATEGORY = `query GetProducts($category_uid: [String!]) {
  products(
    search: ""
    filter: { category_uid: { in: $category_uid }, is_child: { eq: "1" } },
    pageSize: 30,
    currentPage: 1
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
`