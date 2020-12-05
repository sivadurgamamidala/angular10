export class ServersService{
    private servers = [
        {
          id:1,
          name:'Production Server',
          status:'online',
        },
        {
          id:2,
          name:'tester server',
          status:'offline',
        },
        {
          id:3,
          name:'shiva server',
          status:'online',
        }
    ];
    getServers(){
       return this.servers;
    }
    getServer(id:number){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        return server;
    }
}