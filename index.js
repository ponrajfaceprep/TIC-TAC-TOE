let key = 'O';
        function update(props){
          if(document.getElementById(props).innerHTML != 'X' && document.getElementById(props).innerHTML != 'O'){
            key = (key === 'X') ? 'O' : 'X';
            const button_obj = document.getElementById(props);
            button_obj.innerHTML = key;
            check(String(props));
            if(full()){
              const res = document.getElementById('game-text-1');
              const re  = document.getElementById('result');
              const st = document.getElementById('start');
              res.innerHTML = 'XO DRAW';
              re.style.display = 'block';
              st.style.display = 'block';
              reset();
            }
          }
        }

        function full(){
          let need = true;
          for(let i = 1; i <= 9; i++){
            let val = document.getElementById('b'+i).innerHTML;
            if(!(val === 'X' || val === 'O')){
              need = false;
              break;
            }
          }
          console.log(need);
          return need;
        }

        function check(props){
            const res = document.getElementById('game-text-1');
            const re = document.getElementById('result');
            const st = document.getElementById('start');
          

            const b_1 = document.getElementById('b1').innerHTML;
            const b_2 = document.getElementById('b2').innerHTML;
            const b_3 = document.getElementById('b3').innerHTML;
            const b_4 = document.getElementById('b4').innerHTML;
            const b_5 = document.getElementById('b5').innerHTML;
            const b_6 = document.getElementById('b6').innerHTML;
            const b_7 = document.getElementById('b7').innerHTML;
            const b_8 = document.getElementById('b8').innerHTML;
            const b_9 = document.getElementById('b9').innerHTML;
            
            if((props === 'b1' && b_2 === key && b_3 === key)||(props === 'b1' && b_4 === key && b_7 === key)||(props === 'b1' && b_5 === key && b_9 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b2' && b_1 === key && b_3 === key)||(props === 'b2' && b_5 === key && b_8 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b3' && b_1 === key && b_2 === key)||(props === 'b3' && b_7 === key && b_5 === key)||(props === 'b3' && b_9 === key && b_6 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b4' && b_1 === key && b_7 === key)||(props === 'b4' && b_5 === key && b_6 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';  
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b5' && b_1 === key && b_9 === key)||(props === 'b5' && b_7 === key && b_3 === key)||(props === 'b5' && b_4 === key && b_6 === key)||(props === 'b5' && b_2 === key && b_8 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b6' && b_4 === key && b_5 === key)||(props === 'b6' && b_3 === key && b_9 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b7' && b_5 === key && b_3 === key)||(props === 'b7' && b_4 === key && b_1 === key)||(props === 'b7' && b_8 === key && b_9 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b8' && b_7 === key && b_9 === key)||(props === 'b8' && b_2 === key && b_5 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
            else if((props === 'b9' && b_7 === key && b_8 === key)||(props === 'b9' && b_1 === key && b_5 === key)||(props === 'b9' && b_3 === key && b_6 === key)){
                res.innerHTML = (key === 'X') ? 'X WINS' : 'O WINS';
                re.style.display = 'block';
                st.style.display = 'block';
                reset();
            }
        }


        function reset()
        {
            console.log('reseted');
            for(let i = 1; i <= 9; i++){
              document.getElementById('b'+i).innerHTML = '';
            }
        }

        function start_game(){
          console.log('Game started');
          const re = document.getElementById('result');
          const st = document.getElementById('start');
          re.style.display = 'none';
          st.style.display = 'none';
        }