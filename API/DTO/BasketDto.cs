using System;
using API.Entities;

namespace API.DTO;

public class BasketDto
{
  public required string BasketId { get; set; }
  public List<BasketItemDto> Items { get; set; } = [];
}

