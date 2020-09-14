import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
   leaders: Leader[];
 
   selectedDish: Leader;
   leader: Leader;
  
   constructor(private leaderservice: LeaderService) { }
  
    ngOnInit() {
    
    //this.leader = this.leaderService.getFeaturedLeader();
    this.leaderservice.getLeaders().then(leaders => this.leaders = leaders);;
    this.leaderservice.getFeaturedLeader().then(leader => this.leader = leader);
  }
  onSelect(leader: Leader) {
    this.selectedDish =leader;
  }

}
