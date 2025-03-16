import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyDataService {
  private nameLobby = "";
  private namePlayer = "";
  private isAdmin = false;
  private isPlayer = false;

  constructor() { }

  setNameLobby(nameLobby: string): void {
    this.nameLobby = nameLobby;
  }

  setNamePlayer(name: string): void {
    this.namePlayer = name;
  }

  setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  setIsPlayer(isPlayer: boolean): void {
    this.isPlayer = isPlayer;
  }

  getNameLobby(): string {
    return this.nameLobby;
  }

  getNamePlayer(): string {
    return this.namePlayer;
  }


  getIsAdmin(): boolean {
    return this.isAdmin;
  }
  getIsPlayer(): boolean {
    return this.isPlayer;
  }
}
