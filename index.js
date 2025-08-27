function getId(id) {
    return document.getElementById(id);


}


document.getElementById('heart_icon')
    .addEventListener('click', function () {
        const heart_count = Number(getId('heart_count').innerText);

        const new_heart_count = heart_count + 1;
        getId('heart_count').innerText = new_heart_count;
        console.log(new_heart_count)
    })

document.getElementById('call_btn')
    .addEventListener('click', function () {
        const service_name = getId('service_name').innerText;
        const service_number = getId('service_number').innerText;
        const coin_count = Number(getId('coin_count').innerText);
        const time = new Date().toLocaleTimeString(); 
        if (coin_count < 20) {
            alert('Insufficient coin balance');
            return;
        }

        alert('📞 Calling' + ' ' + service_name + ' ' + service_number);
        const new_coin_count = coin_count - 20;
        getId('coin_count').innerText = new_coin_count;

        const new_div = document.createElement('div');
        new_div.innerHTML = `<div class="flex justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <h1 class="font-bold">${service_name}</h1>
                            <p>${service_number}</p>
                        </div>
                        <p>${time}</p>
                    </div>
    `
    const history_container = getId('history_container');
      history_container.appendChild(new_div);
    })
  

    document.getElementById('clr_btn')
    .addEventListener('click' , function ()
{
    const history_container = getId('history_container');
    history_container.innerHTML= ``;
    alert('Cleared all call history')
})

// copy functionality
document.addEventListener('DOMContentLoaded', () => enableCopyButtons());

function enableCopyButtons() {
  
  async function copyText(text) {
    if (!text) return Promise.reject('No text to copy');
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    }
  }

  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

   
    const isCopyBtn = btn.classList.contains('text-gray-500') ||
                      btn.textContent.trim().toLowerCase().includes('copy') ||
                      Boolean(btn.querySelector('i.fa-copy'));
    if (!isCopyBtn) return;

   
    const card = btn.closest('.common_card');
    if (!card) return;

    
    let numberEl = card.querySelector('#service_number') || card.querySelector('p.font-bold') || card.querySelector('p');
    const hotline = numberEl ? numberEl.textContent.trim().replace(/\s+/g, ' ') : '';

    if (!hotline) {
      alert('No hotline number found to copy.');
      return;
    }

    try {
      await copyText(hotline);
      alert(`☎️ Hotline ${hotline} copied to clipboard!`);

      
      let copyCountBox = document.getElementById('copy_count');

      
      if (!copyCountBox) {
        const headerSpans = Array.from(document.querySelectorAll('header span'));
        copyCountBox = headerSpans.find(sp => sp.id !== 'heart_count' && sp.id !== 'coin_count') || null;
      }

      if (copyCountBox) {
        const current = Number(copyCountBox.innerText.trim()) || 0;
        copyCountBox.innerText = current + 1;
      } else {
        
        console.warn('Copy counter element not found. Consider adding id="copy_count" to the copy span in the header.');
      }
    } catch (err) {
      console.error('Copy failed', err);
      alert('Copy failed — please select the number manually to copy.');
    }
  });
}
