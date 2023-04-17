package com.denuciaassedio.futuropre_vestibular.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name = "tb_denuncia")
public class Denuncia implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String text;
	private String place;
	private String name_author;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
	private Instant moment;
	
	@OneToOne	//1 denuncia / 1 user
	@JoinColumn(name="user_id")		//fk db
	private User user;
	
	private Integer denunciaStatus;
	
	
	public Denuncia() {}
	
	public Denuncia(Integer id, String place, Instant moment, User user, String text, String name_author) {
		this.id = id;
		this.setDenunciaStatus(denunciaStatus);
		this.place = place;
		this.user = user;
		this.text = text;
		this.moment = moment;
		this.name_author = name_author;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}
	
	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public String getName_author() {
		return name_author;
	}

	public void setName_author(String name_author) {
		this.name_author = name_author;
	}

	public Integer getDenunciaStatus() {
		return denunciaStatus;
	}

	public void setDenunciaStatus(Integer denunciaStatus) {
		this.denunciaStatus = denunciaStatus;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Denuncia other = (Denuncia) obj;
		return Objects.equals(id, other.id);
	}

}
