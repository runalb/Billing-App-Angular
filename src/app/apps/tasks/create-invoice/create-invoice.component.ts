import { Component, OnInit } from '@angular/core';

// constants
import { EventType } from 'src/app/core/constants/events';

// services
import { EventService } from 'src/app/core/service/event.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  constructor (private eventService: EventService) { }


  ngOnInit(): void {
    this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
      title: "Create Invoice",
      breadCrumbItems: [{ label: 'Invoice', path: '.' }, { label: 'Create Invoice', path: '.', active: true }]
    });
  }

}
