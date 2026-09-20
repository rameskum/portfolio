# Mastering Java Streams API

The Java Streams API, introduced in Java 8, revolutionized how we process collections. Instead of imperative loops, we can now write declarative, functional-style code that's more readable and maintainable.

## Why Streams?

Traditional collection processing involves explicit loops, temporary variables, and mutation. Streams provide a cleaner alternative:

```java
// Old way
List<String> filtered = new ArrayList<>();
for (String item : items) {
    if (item.length() > 5) {
        filtered.add(item.toUpperCase());
    }
}

// Streams way
List<String> filtered = items.stream()
    .filter(item -> item.length() > 5)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

## Core Operations

### Map
Transform each element:
```java
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
```

### Filter
Keep elements matching a predicate:
```java
List<String> longNames = names.stream()
    .filter(name -> name.length() > 10)
    .collect(Collectors.toList());
```

### Reduce
Combine elements into a single result:
```java
int sum = numbers.stream()
    .reduce(0, Integer::sum);
```

## Performance Considerations

Streams are not always faster than loops. Use them for:
- Clarity and maintainability
- Parallel processing of large datasets
- Complex transformations that benefit from composition

## Conclusion

Streams make Java code more expressive. Master map, filter, and reduce, and you'll write cleaner, more maintainable code.
