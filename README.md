# Dimensionamento-de-paineis-fotovoltaicos
### Descrição
* preencher 
   * sistema:monofasico||bifasico||trifasico
   * consumo em kw/h de pelo menos um  mes (quanto mais meses melhor)
   * numero do cep
   * potencia do painel ultilizado em W
* botoes
  * encontrar localização (com o numero do cep)
* exibir
  * consumo medio anual em kw/h - (media(consumo))
  * consumo medio em kw/h - (consumo medio anual - sistema) 
  * consumo medio diario em kw/h
  * local
    * logradouro
    * latitude 
    * longitude
  * irradiação do local em Wh/m2 dia
    * meses
    * media
    * menor mes
  * demanda (consumo diario(kw/h) / menor mes(kw/h)) 
  * quantidade de paineis (demanda(W / potencia do painel(W))

---
### API's 
* geocoding google
* irradiacao-brasil(bade de dados da labren)

## Tela
![image](https://user-images.githubusercontent.com/28581183/210120874-338b5883-b6cf-4c5f-973b-046debb6c941.png)
