package com.weguide.WeGuideBackEnd.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "User")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@NotBlank
	@Column(name = "first_name", length = 50)
	private String firstName;
	
	@NotNull
	@NotBlank
	@Column(name = "last_name", length = 100)
	private String lastName;
	
	@NotNull
	@NotBlank
	@Column(name = "address", length = 100)
	private String address;
	
	@NotNull
	@NotBlank
	@Column(name = "occupation", length = 30)
	private String occupation;
	
	public User() {
		
	}

	public User(Long id, @NotNull @NotBlank String firstName, @NotNull @NotBlank String lastName,
			@NotNull @NotBlank String address, @NotNull @NotBlank String occupation) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.occupation = occupation;
	}
	

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	

}