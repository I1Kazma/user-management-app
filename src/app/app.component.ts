import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  filterType: string = 'all';
  selectedUserEmail: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  onSearch() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.users;

    if (this.searchQuery) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.filterType === 'active') {
      filtered = filtered.filter((user) => user.active);
    } else if (this.filterType === 'inactive') {
      filtered = filtered.filter((user) => !user.active);
    }

    this.filteredUsers = filtered;
  }

  selectUser(user: User) {
    this.selectedUserEmail = user.email;
  }
}
