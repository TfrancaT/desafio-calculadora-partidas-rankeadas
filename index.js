
let chanceWin, chanceLoss;
    chanceWin = 118;
    chanceLoss = 20;

    
    function postRank( chanceWin, chanceLoss ) {
        let endRank = chanceWin - chanceLoss;
        return endRank;
    }
    
    endPostRank = postRank( chanceWin, chanceLoss );
    
    if( endPostRank <= 10 ){
        console.log( 'Seu saldo de vitórias é:',  endPostRank, 'Ranking: Ferro.' );
    } else if ( endPostRank > 10 && endPostRank <= 20 ){
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Bronze.' );
    } else if( endPostRank > 20 && endPostRank <= 50 ){
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Prata.' );
    } else if( endPostRank > 50 && endPostRank <= 80 ){
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Ouro.' );
    } else if( endPostRank > 80 && endPostRank <= 90 ){
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Diamante' );
    } else if( endPostRank > 90 && endPostRank <= 100 ){
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Lendário' );
    } else {
        console.log( 'Seu saldo de vitórias é:', endPostRank, 'Ranking: Imortal');
    }