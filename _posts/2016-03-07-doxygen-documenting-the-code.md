---
layout: post
title: Doxygen, documenting the code
categories: Tech
tags: doxygen
---

### Reference
- *http://www.doxygen.nl/manual/docblocks.html*

### Comment blocks
```
/**
 * ... text ...
 */
```

or

```
/*!
 * ... text ...
 */
```

or

```
///
/// ... text ...
///
```

or

```
//!
//!... text ...
//!
```

### Putting documentation after members
```
int var; /**< Detailed description after the member */
```

or

```
int var; /*!< Detailed description after the member */
```

or

```
int var; ///< Detailed description after the member
         ///< 
```

or

```
int var; //!< Detailed description after the member
         //!< 
```

or

```
int var; ///< Brief description after the member
```

or

```
int var; //!< Brief description after the member
```

### Special command
+ \brief to document a brief description.
+ \class to document a class.
+ \param to document a parameter, use [in], [out], [in,out] to document the direction.
+ \see to document a reference.
+ \struct to document a C-struct. 
+ \union to document a union.
+ \enum to document an enumeration type.
+ \fn to document a function.
+ \var to document a variable or typedef or enum value.
+ \def to document a #define.
+ \typedef to document a type definition.
+ \file to document a file.
+ \namespace to document a namespace.
+ \package to document a Java package.
+ \interface to document an IDL interface. 
+ \todo to document a todo block.


```
/** @file */ 
```

or

```
/*! \file */ 
```