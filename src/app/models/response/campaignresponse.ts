
export interface Campaign {
  total: number
  sum_total: {
    orders: string
    units: string
    visits: string
    conv_rate: string
    revenue: string
  }
  campaigns: [{
    id: string
    url: string
    domain_id: string
    domain: string
    title: string
    state: string
    private: boolean
    back_view: boolean
    front_image: string
    back_image: string
    favorite: number
    archive: number
    base_group_id: string
    create_date: string
    version: string
    revenue: string
    orders: string
    percent_change: string
    units: string
    visits: string
    conv_rate: string
    categories: string
    images:string[]
  }]
}

