package com.maroni.util.filter;

import java.io.Serializable;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.swing.text.html.FormSubmitEvent.MethodType;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;

import org.json.JSONObject;

import com.maroni.model.Usuario;
import com.maroni.service.UsuarioService;
import com.maroni.util.token.TokenAuthenticationGenerator;
import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

@Singleton
public class ApiRestFilter implements ContainerRequestFilter, Serializable {
	private static final long serialVersionUID = -1234848483487540236L;

	@Inject
	private UsuarioService usuarioService;

	@Override
	public ContainerRequest filter(ContainerRequest request) {
		String token = request.getHeaderValue("authorization");
		String usuario = null;

		if (request.getPath().contains("site/destaques")
				|| request.getPath().contains("site/produtos")
				|| request.getPath().contains("site/servicos")) {
			return request;
		}

		if (request.getMethod().equals(MethodType.POST.name())) {
			return request;
		}

		try {
			usuario = TokenAuthenticationGenerator.getUserJsonFromToken(token);
		} catch (Exception e) {
			if (e.getMessage().contains("JWS signature is invalid")) {
				System.out.println("Assinatura do Token inválida");
				throw new WebApplicationException(Status.UNAUTHORIZED);
			}
		}
		if (usuario != null) {
			JSONObject usuarioJSON = new JSONObject(usuario);
			Usuario usuarioExpose = new Usuario(usuarioJSON);
			token = usuarioService.buscarTokenPorUsuario(usuarioExpose);
		}
		if (token == null || token.isEmpty()) {
			throw new WebApplicationException(Status.UNAUTHORIZED);
		}

		return request;
	}

}