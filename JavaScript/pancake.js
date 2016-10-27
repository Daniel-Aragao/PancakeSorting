Sort = (function () {
    
    function pancakeSort(vetor) {
        var len = vetor.length;
        for (var i = len - 1; i > 0; i--){
            var max_index = 0;
            for (var j = 0; j <= i; j++){
                if (vetor[j] > vetor[max_index]) {
                    max_index = j;
                }                
            }
            if (max_index != i) {
                Flip(vetor, 0, max_index + 1);
                Flip(vetor, 0, i+1);
            }
        }

        return vetor;
    }

    function Flip(array, start, end) {
        if (start > array.len || start >= end || end > array.len) {
            return array;
        }
        var vetor = array.slice(start, end).reverse();
        for (var i = start; i < end; i++){
            array[i] = vetor[i];
        }
    }

    return {
        pancake: function (vetor) {
            return pancakeSort(vetor);
        }
    }  
})()