package com.maroni.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.maroni.model.Produto;
import com.maroni.service.ProdutoService;

@Path("/produtos")
@RequestScoped
public class ProdutoExpose implements Serializable {
	private static final long serialVersionUID = -8432578069796801804L;

	@Inject
	private ProdutoService service;
	
	/**
	 * @author Vanderson Maroni | 17/02/2016
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Produto> buscarTodos(){
		return service.findAll();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response cadastrar(Produto produto){
		service.save(produto);
		return Response.ok(produto, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Produto produto) {
		service.update(produto);
		return Response.ok(produto, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id){
		service.delete(Integer.parseInt(id));
		return Response.ok(MediaType.APPLICATION_JSON).build();
	}

}