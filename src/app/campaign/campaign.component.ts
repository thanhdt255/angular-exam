import { Campaign } from './../models/response/campaignresponse';
import { UserService } from './../service/user.service';
import { UserLoginResponse } from '../models/response/UserLoginResponse';
import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { DataimageService } from '../service/dataimage.service';
import { SelectionType } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  selected = [];
  SelectionType = SelectionType;

  domains = [
    {
      id: 1,
      name: 'All Domains',
    },
    { id: 2, name: '30usd.com' },
  ];
  actives = [
    {
      id: 1,
      name: 'Status',
      value: 'Status',
    },
    { id: 2, name: 'Active', value: 'Active' },
    {
      id: 3,
      name: 'Ended',
      value: 'Ended',
    },
    { id: 4, name: 'Locked', value: 'Locked' },
  ];
  time = [
    {
      id: 1,
      name: 'Today',
    },
    { id: 2, name: 'All time' },
    {
      id: 3,
      name: 'Last day',
    },
    { id: 4, name: 'This month' },
    {
      id: 5,
      name: 'Last month',
    },
    { id: 6, name: 'Last 30 days' },
    {
      id: 7,
      name: 'Last 3 months',
    },
    { id: 8, name: 'Customize Date' },
  ];
  selectedTime = this.time[0].name;
  selectedactive = this.actives[0].name;
  selecteddomain = this.domains[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;

  peopleLoading = false;
  columns = [  {name:'select', cellTemplate: 'checkBox'},
    { prop: 'title', name: 'Campaigns'},
    { prop: 'images', name: 'Design', width: 300 },
    { prop: 'visits', name: 'Visits', resizeable: false },
    { prop: 'orders', name: 'Orders' },
    { prop: 'units', name: 'Units' },
    { prop: 'conv_rate', name: 'ConsersionRate' },
    { prop: 'revenue', name: 'Profit' },
    { prop: 'create_date', name: 'CreatedOn' },
    { prop: 'state', name: 'Status' },
    { prop: 'categories', name: 'Categorordersies/Tags' },
  ];
  image = [];
  allColumns = [
    {name:'Company Name'},
    { name: 'Campaigns' },
    { name: 'Design' },
    { name: 'Visits' },
    { name: 'Orders' },
    { name: 'Units' },
    { name: 'ConsersionRate' },
    { name: 'Profit' },
    { name: 'CreatedOn' },
    { name: 'Status' },
    { name: 'Categories/Tags' },
    { name: 'Actions' },
  ];
  Campaignmodel: Campaign = {
    total: 0,
    sum_total: {
      orders: '',
      units: '',
      visits: '',
      conv_rate: '',
      revenue: '',
    },
    campaigns: [
      {
        id: '',
        url: '',
        domain_id: '',
        domain: '',
        title: '',
        state: '',
        private: true,
        back_view: true,
        front_image: '',
        back_image: '',
        favorite: 0,
        archive: 0,
        base_group_id: '',
        create_date: '',
        version: '',
        revenue: '',
        orders: '',
        percent_change: '',
        units: '',
        visits: '',
        conv_rate: '',
        categories: '',
        images: [],
      },
    ],
  };
  CampaignmodelaActive: Campaign = {
    total: 0,
    sum_total: {
      orders: '',
      units: '',
      visits: '',
      conv_rate: '',
      revenue: '',
    },
    campaigns: [
      {
        id: '',
        url: '',
        domain_id: '',
        domain: '',
        title: '',
        state: '',
        private: true,
        back_view: true,
        front_image: '',
        back_image: '',
        favorite: 0,
        archive: 0,
        base_group_id: '',
        create_date: '',
        version: '',
        revenue: '',
        orders: '',
        percent_change: '',
        units: '',
        visits: '',
        conv_rate: '',
        categories: '',
        images: [],
      },
    ],
  };
  listCampaign: Campaign = {
    total: 0,
    sum_total: {
      orders: '',
      units: '',
      visits: '',
      conv_rate: '',
      revenue: '',
    },
    campaigns: [
      {
        id: '',
        url: '',
        domain_id: '',
        domain: '',
        title: '',
        state: '',
        private: true,
        back_view: true,
        front_image: '',
        back_image: '',
        favorite: 0,
        archive: 0,
        base_group_id: '',
        create_date: '',
        version: '',
        revenue: '',
        orders: '',
        percent_change: '',
        units: '',
        visits: '',
        conv_rate: '',
        categories: '',
        images: [],
      },
    ],
  };

  rows = [];
  Campaignfind = [
    {
      id: '',
      url: '',
      domain_id: '',
      domain: '',
      title: '',
      state: '',
      private: true,
      back_view: true,
      front_image: '',
      back_image: '',
      favorite: 0,
      archive: 0,
      base_group_id: '',
      create_date: '',
      version: '',
      revenue: '',
      orders: '',
      percent_change: '',
      units: '',
      visits: '',
      conv_rate: '',
      categories: '',
      images: [],
    },
  ];
  nameCampaignfind: {
    name: string;
  };
  Campaignselect = {
    value: '',
  };
  constructor(
    private http: HttpClient,
    private UserService: UserService,
    private dataservice: DataimageService
  ) {
    this.selectedCar = '';
    this.selection = '';
    this.Campaignmodel = JSON.parse(
      JSON.stringify(this.dataservice.datacampaign)
    );
    this.CampaignmodelaActive = JSON.parse(
      JSON.stringify(this.dataservice.datacampaignended)
    );

    for (let index = 0; index < this.Campaignmodel.campaigns.length; index++) {
      this.Campaignmodel.campaigns[index].images = [
        this.Campaignmodel.campaigns[index].front_image,
        this.Campaignmodel.campaigns[index].back_image,
      ];
      this.Campaignmodel.campaigns[index].state = 'Active';
    }
    for (
      let index = 0;
      index < this.dataservice.datacampaignended.campaigns.length;
      index++
    ) {
      (this.CampaignmodelaActive.campaigns[index].images = [
        this.dataservice.datacampaignended.campaigns[index].front_image,
        this.dataservice.datacampaignended.campaigns[index].back_image,
      ]),
        (this.CampaignmodelaActive.campaigns[index].state = 'Ended');
    }

    this.rows = this.Campaignmodel.campaigns;
    console.log(this.listCampaign);
    // this.fetch((data) => {
    //   this.rows =data;
    // });
    this.nameCampaignfind = {
      name: '',
    };
  }

  ngOnInit(): void {
    this.searchCampaign();
  }
  changeFn(val) {
    console.log('Dropdown selection:', val);
  }
  endedCampaign() {
    this.rows = JSON.parse(JSON.stringify(this.dataservice.datacampaignended));
  }
  activeCampaign() {
    this.rows = this.Campaignmodel.campaigns;
  }
  searchCampaign() {
    debugger;
    console.log(this.selectedactive);

    if (this.selectedactive === 'Ended') {
      this.rows = this.CampaignmodelaActive.campaigns;
      this.Campaignfind = this.CampaignmodelaActive.campaigns.filter((x) =>
        x.title.toLowerCase().includes(this.nameCampaignfind.name.toLowerCase())
      );
      console.log(this.Campaignfind);
      this.rows = this.Campaignfind;
    } else if (this.selectedactive === 'Locked') this.rows = [];
    else {
      this.rows = this.Campaignmodel.campaigns;
      this.Campaignfind = this.Campaignmodel.campaigns.filter((x) =>
        x.title.toLowerCase().includes(this.nameCampaignfind.name.toLowerCase())
      );
      console.log(this.Campaignfind);
      this.rows = this.Campaignfind;
    }
    console.log(this.rows);
  }

  ColumnMode = ColumnMode;
  SortType = SortType;
  toggleOld(col: any) {
    debugger;

    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter((c) => {
        return c.name !== col.name;
      });
    } else {
      console.log(this.columns.indexOf(col));
      this.columns.splice(col, 0, col);
      console.log(this.columns.indexOf(col));
      console.log(this.columns);
    }
  }

  toggle(col: any) {

    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter((c) => {
        return c.name !== col.name;
      });
    } else {
      console.log(this.columns.indexOf(col));
      this.columns.splice(col, 0, col);
      console.log(this.columns.indexOf(col));
      console.log(this.columns);
    }
  }

  isChecked(col: any) {
    return (
      this.columns.find((c) => {
        return c.name === col.name;
      }) !== undefined
    );
    console.log(this.columns.indexOf(col.name));
  }

  // fetch(cb: any) {
  //     const req = new XMLHttpRequest();
  //     req.open('GET', `assets/data/company.json`);
  //     req.onload = () => {
  //       cb(JSON.parse(req.response));
  //     };
  //     req.send();
  //   }
  //   private loadPeople() {
  //     this.peopleLoading = true;
  //     this.dataService.getPeople().subscribe(x => {
  //         this.people = x;
  //         this.peopleLoading = false;
  //     });
  // }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
}
