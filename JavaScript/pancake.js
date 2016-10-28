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
                if (max_index > 0) {
                    Flip(vetor, 0, max_index + 1);                    
                }
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

    function getMenor(vetor) {
        var menor = vetor[0];
        vetor.forEach(function (v, i) {
            if (v < menor) {
                menor = v;
           } 
        });
        return menor;
    }

    function arrayToPancakeHtml(vetor, menorBarra, height, digits) {
        var menor = getMenor(vetor);
        var fator = menorBarra / menor;

        var container = document.createElement("div")
        container.id = "container-pancake"

        vetor.forEach(function (v, i) {
            var tamanho = menorBarra + fator * (v - menor);
            var div = document.createElement("div");

            red = Math.abs((tamanho*fator)%255);
            gree = Math.abs(((tamanho*(i+v))/fator)%255);
            blue = Math.abs((tamanho * height/fator) % 255);
            console.log(fator)

            div.style.height = height + "px";
            div.style.background = "black";
            div.style.width = tamanho + "px";
            div.style.margin = "auto";
            div.style.marginTop = "5px";
            div.style.marginBottom = "5px";
            div.style.borderRadius = '5px';
            div.style.backgroundColor = "rgb(" + red + "," + gree + "," + blue + ")"
            if (digits) {
                div.innerHTML = v;
                div.style.color = 'white';
                div.style.textAlign = "center";                
            }

            container.appendChild(div);
        });

        return container;
    }

    return {
        pancake: function (vetor) {
            return pancakeSort(vetor);
        },
        PancakeHtml: function (vetor, menorBarraWidth, height, digits) {
            return arrayToPancakeHtml(vetor, menorBarraWidth, height, digits);
        }
    }  
})()