export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ]
      updateStatus(id:number,newStatus:string){
        this.accounts[id].status = newStatus;
      }
      AddedAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});
      }
}