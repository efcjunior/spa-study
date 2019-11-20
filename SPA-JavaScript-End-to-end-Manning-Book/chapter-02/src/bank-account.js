var account = (function(){
    var balance = 0.0
    return {
        balancePosition: function(){
            return balance;
        },

        deposit: function(ammount){
            balance += ammount;
        },

        withdraw: function(ammount){
            if(balance > ammount){
                balance -= ammount;
            }
        }
    }
})();

account.deposit(100);
console.log(account.balancePosition());
account.withdraw(50);
console.log(account.balancePosition());