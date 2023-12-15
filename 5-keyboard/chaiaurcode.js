const insert = document.getElementById('insert');

window.addEventListener('keydown', function (i) {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${i.key === ' ' ? 'space' : i.key}</td>
      <td>${i.keyCode}</td>
      <td>${i.code}</td>
    </tr>
  </table>
    </div>
  `;
});
