var equipamentos = {
  MR20: {metrosQuadrados: 100, usuariosConectados: 50},
  MR36: {metrosQuadrados: 200, usuariosConectados: 100},
  MR44: {metrosQuadrados: 300, usuariosConectados: 200}
};

function calcularEquipamento() {
  var tipoLocal = document.getElementById("tipo_local").value;
  var andares = document.getElementById("andares").value;
  var altura = document.getElementById("altura").value;
  var tamanhoAmbiente = document.getElementById("tamanho_ambiente").value;
  var qtdUsuarios = document.getElementById("qtd_usuario").value;
  var resultado = document.getElementById("resultado");

  if (tipoLocal === "Externo" || andares > 5 || altura > 6) {
    resultado.innerHTML = "Local externo necessita do estudo do site survey preditivo";
  } else if (tamanhoAmbiente > 600) {
    resultado.innerHTML = "Você precisa fazer o site survey preditivo";
  } else {
    var usuariosConectados = 0;
    var modeloEquipamento = "";
    if (tamanhoAmbiente <= 100) {
      modeloEquipamento = "MR20";
      usuariosConectados = equipamentos[modeloEquipamento].usuariosConectados;
    } else if (tamanhoAmbiente <= 200) {
      modeloEquipamento = "MR36";
      usuariosConectados = equipamentos[modeloEquipamento].usuariosConectados;
    } else {
      modeloEquipamento = "MR44";
      usuariosConectados = equipamentos[modeloEquipamento].usuariosConectados;
    }

    var qtdEquipamentos = Math.ceil(qtdUsuarios / usuariosConectados);
    if (andares > 1) {
      resultado.innerHTML = "Recomendação: " + qtdEquipamentos + " unidades de " + modeloEquipamento + " para cada andar, com capacidade para até " + usuariosConectados + " usuários conectados simultâneos.";
    } else {
      resultado.innerHTML = "Recomendação: " + qtdEquipamentos + " unidade(s) de " + modeloEquipamento + ", com capacidade para até " + usuariosConectados + " usuários conectados simultâneos.";
    }
  }
}
