function Cell()
{
    this.alive = false;
    this.aliveInNextGeneration = false;


    this.isAlive = function()
    {
        return this.alive;
    }


    this.setAlive = function(alive)
    {
        this.alive = alive;
    }


    this.updateStateInNextGeneration = function(nAliveNeighbors)
    {
        if(this.alive){
            this.aliveInNextGeneration = (nAliveNeighbors >= 2 && nAliveNeighbors <= 3);
        }else{
            this.aliveInNextGeneration = (nAliveNeighbors == 3);
        }
    }


    this.setNextGeneration = function()
    {
        this.alive = this.aliveInNextGeneration;
    }


    this.swapAlive = function()
    {
        this.alive = !this.alive;
    }
}
