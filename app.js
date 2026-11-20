var policies={
  privacy:{
    es:`<h2>Política de Privacidad</h2><p><strong>Última actualización:</strong> 2025</p><p>En <strong>Mar Flower Truck</strong> nos comprometemos a proteger tu privacidad.</p><h3>1. Información que recopilamos</h3><p>Podemos recopilar tu nombre, número de teléfono, email y dirección cuando realizas un pedido o nos contactas.</p><h3>2. Uso de la información</h3><p>Usamos tu información únicamente para procesar pedidos y comunicarnos contigo. Nunca vendemos ni compartimos tu información.</p><h3>3. Pagos</h3><p>Los pagos son procesados de forma segura por Square. No almacenamos información de tarjetas.</p><h3>4. Contacto</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`,
    en:`<h2>Privacy Policy</h2><p><strong>Last updated:</strong> 2025</p><p><strong>Mar Flower Truck</strong> is committed to protecting your privacy.</p><h3>1. Information we collect</h3><p>We may collect your name, phone, email and address when you place an order or contact us.</p><h3>2. Use of information</h3><p>We use your information solely to process orders and communicate with you. We never sell or share your information.</p><h3>3. Payments</h3><p>Payments are securely processed by Square. We do not store card information.</p><h3>4. Contact</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`,
    pt:`<h2>Política de Privacidade</h2><p><strong>Última atualização:</strong> 2025</p><p><strong>Mar Flower Truck</strong> está comprometida em proteger sua privacidade.</p><h3>1. Informações coletadas</h3><p>Podemos coletar seu nome, telefone, email e endereço ao fazer um pedido.</p><h3>2. Uso das informações</h3><p>Usamos suas informações apenas para processar pedidos. Nunca vendemos ou compartilhamos suas informações.</p><h3>3. Contato</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`
  },
  terms:{
    es:`<h2>Términos y Condiciones</h2><p><strong>Última actualización:</strong> 2025</p><p>Al usar este sitio o realizar un pedido a <strong>Mar Flower Truck</strong>, aceptas los siguientes términos.</p><h3>1. Pedidos y pagos</h3><p>Todos los pedidos están sujetos a disponibilidad. Aceptamos pagos mediante Square y tarjeta de crédito/débito.</p><h3>2. Cancelaciones y reembolsos</h3><p>Las cancelaciones deben realizarse con al menos 24 horas de anticipación. Las flores son perecederas — no aceptamos devoluciones una vez entregadas.</p><h3>3. Productos</h3><p>Las flores son productos naturales. Pueden existir variaciones respecto a las fotos.</p><h3>4. Contacto</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`,
    en:`<h2>Terms & Conditions</h2><p><strong>Last updated:</strong> 2025</p><p>By using this website or placing an order with <strong>Mar Flower Truck</strong>, you agree to the following terms.</p><h3>1. Orders & payments</h3><p>All orders are subject to availability. We accept payments via Square and credit/debit card.</p><h3>2. Cancellations & refunds</h3><p>Cancellations must be made at least 24 hours in advance. Flowers are perishable — no returns once delivered.</p><h3>3. Products</h3><p>Flowers are natural products. Color and size may vary from photos.</p><h3>4. Contact</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`,
    pt:`<h2>Termos e Condições</h2><p><strong>Última atualização:</strong> 2025</p><p>Ao usar este site ou fazer um pedido na <strong>Mar Flower Truck</strong>, você concorda com os seguintes termos.</p><h3>1. Pedidos e pagamentos</h3><p>Todos os pedidos estão sujeitos à disponibilidade. Aceitamos pagamentos via Square.</p><h3>2. Cancelamentos</h3><p>Cancelamentos com pelo menos 24 horas de antecedência. Flores são perecíveis — sem devoluções após a entrega.</p><h3>3. Contato</h3><p><strong>info@marflowertruck.com</strong> · <strong>+1 (786) 545-6337</strong></p>`
  }
};
(function () {
  var LANGS = ['es', 'en', 'pt'];
  var lang = 'es';
  try { lang = localStorage.getItem('mft-lang') || ''; } catch (e) {}
  if (LANGS.indexOf(lang) === -1) {
    var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    lang = LANGS.indexOf(nav) !== -1 ? nav : 'es';
  }

  // Guarda el texto original (español) la primera vez.
  function orig(el, key, val) {
    if (el.dataset[key] === undefined) el.dataset[key] = val;
    return el.dataset[key];
  }
  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-en],[data-pt]').forEach(function (el) {
      var es = orig(el, 'es', el.textContent);
      el.textContent = l === 'es' ? es : (el.dataset[l] || es);
    });
    document.querySelectorAll('[data-en-html],[data-pt-html]').forEach(function (el) {
      var es = orig(el, 'esHtml', el.innerHTML);
      el.innerHTML = l === 'es' ? es : (el.dataset[l + 'Html'] || es);
    });
    document.querySelectorAll('[data-en-alt],[data-pt-alt]').forEach(function (el) {
      var es = orig(el, 'esAlt', el.alt);
      el.alt = l === 'es' ? es : (el.dataset[l + 'Alt'] || es);
    });
    document.querySelectorAll('[data-en-aria],[data-pt-aria]').forEach(function (el) {
      var es = orig(el, 'esAria', el.getAttribute('aria-label'));
      el.setAttribute('aria-label', l === 'es' ? es : (el.dataset[l + 'Aria'] || es));
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.setLang === l));
    });
    try { localStorage.setItem('mft-lang', l); } catch (e) {}
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang); });
  });
  if (lang !== 'es') setLang(lang);

  // Políticas en una ventana
  var dlg = document.getElementById('policy'), body = document.getElementById('policyBody');
  document.querySelectorAll('[data-policy]').forEach(function (b) {
    b.addEventListener('click', function () {
      body.innerHTML = policies[b.dataset.policy][lang];
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    });
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
