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

import com.maroni.TiposDeClassesEnum;
import com.maroni.model.JsonTotal;
import com.maroni.model.Servico;
import com.maroni.service.ServicoService;
import com.maroni.util.util.ImagemUtil;

@Path("/servicos")
@RequestScoped
public class ServicoExpose implements Serializable {
	private static final long serialVersionUID = -725714741613772422L;

	@Inject
	private ServicoService service;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarTodos() {
		return service.findAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Servico buscarPorId(@PathParam("id") String id) {
		return service.findById(Integer.parseInt(id));
	}

	@GET
	@Path("{quantidade}/{quantidadeMaximaPorPagina}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarParaPaginacao(@PathParam("quantidade") String quantidade, @PathParam("quantidadeMaximaPorPagina") String quantidadeMaximaPorPagina) {
		return service.buscarParaPaginacao(Integer.parseInt(quantidade), Integer.parseInt(quantidadeMaximaPorPagina));
	}

	@GET
	@Path("/total")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarTotal() {
		Number quantidadeTotalDeDestaques = service.quantidadeDestaque();
		JsonTotal json = new JsonTotal();
		json.setTotal((Long) quantidadeTotalDeDestaques);
		return Response.ok(json, MediaType.APPLICATION_JSON).build();
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response cadastrar(Servico servico) {
		servico.setImagem(new ImagemUtil().geraImagem(servico.getImagem(), servico.getDimensoes(), TiposDeClassesEnum.SERVICO));
		service.save(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}

	@PUT
	@Path("{id}/{hasAlteracaoImagem}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, @PathParam("hasAlteracaoImagem") boolean hasAlteracaoImagem, Servico servico) {
		servico.setId(Integer.parseInt(id));
		if (hasAlteracaoImagem) {
			servico.setImagem(new ImagemUtil().geraImagem(servico.getImagem(), servico.getDimensoes(), TiposDeClassesEnum.SERVICO));
		}
		service.update(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}

	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id) {
		service.delete(Integer.parseInt(id));
		return Response.ok(MediaType.APPLICATION_JSON).build();
	}
}
