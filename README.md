#Buscar alternativa para API Geocoding ( acabou o teste gratuito ) 
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
![tela1](https://user-images.githubusercontent.com/28581183/211692758-192f0003-0b2f-41ff-bc57-0015b3207b19.png)

![tela2](https://user-images.githubusercontent.com/28581183/211692772-c1e13359-e02f-418a-8661-42e147a4495f.png)
