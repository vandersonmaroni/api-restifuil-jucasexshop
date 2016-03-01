package com.maroni.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.maroni.model.Destaque;
import com.maroni.model.Produto;
import com.maroni.model.Servico;
import com.maroni.service.DestaqueService;
import com.maroni.service.ProdutoService;
import com.maroni.service.ServicoService;

@Path("/site")
@RequestScoped
public class SiteExpose implements Serializable{
	private static final long serialVersionUID = -7881731653493622751L;

	@Inject
	private DestaqueService destaqueService;
	@Inject
	private ProdutoService produtoService;
	@Inject
	private ServicoService servicoService;

	
	@GET
	@Path("/destaques")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Destaque> buscarTodosDestaques(){
		return destaqueService.findAll();
	}

	@GET
	@Path("/produtos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Produto> buscarTodosProdutos(){
		return produtoService.findAll();
	}

	@GET
	@Path("/servicos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarTodosServicos(){
		return servicoService.findAll();
	}
	
}
