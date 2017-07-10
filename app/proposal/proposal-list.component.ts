import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(23, 'Levitate Strategies', 'http://chadflo.com', 'Ruby on Rails', 150, 120, 15, 'chad@levitatestrategies.com')
  proposalTwo: Proposal = new Proposal(99, 'Adidas', 'http://chadflo.com', 'Ruby on Rails', 150, 120, 15, 'chad@levitatestrategies.com')
  proposalThree: Proposal = new Proposal(300, 'Nike Labs', 'http://chadflo.com', 'Ruby on Rails', 150, 120, 15, 'chad@levitatestrategies.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
