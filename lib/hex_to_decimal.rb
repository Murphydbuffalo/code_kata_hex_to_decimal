def letter_values
  letter_values = {
    'A' => 10,
	  'B' => 11,
	  'C' => 12,
	  'D' => 13,
	  'E' => 14,
	  'F' => 15
  }
end

def get_value(item)
	if letter_values.has_key?(item.upcase)
		letter_values[item.upcase]
	else
		item.to_i
	end
end

def hex_to_decimal(hex_string)
	hex_string.reverse!
	hex_values = []

	hex_string.each_char { |char| hex_values << get_value(char) }
  dec_values = hex_values.map.with_index { |val, i| val * (16 ** i) }
	dec_values.reduce {|total, num| total += num}
end
