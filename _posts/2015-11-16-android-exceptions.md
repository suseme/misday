---
layout: post
title: Android各种exceptions
categories: Tech
tags: android
---

Exceptions来自http://developer.android.com/reference/packages.html。  
转载请注明出处，用于商业用途请联系作者。 

#1.AnnotationFormatError
Indicates that an annotation in the binary representation of a class is syntactically incorrect and the annotation parser is unable to process it.
This exception is unlikely to ever occur, given that the code has been compiled by an ordinary Java compiler.  
1.注解格式错误  
指出在二进制表示的一个类中的注解在语句构成上是不正确的，注解解释器无法处理它。这个异常不是永远发生，指出代码是由一个普通的Java编译器编译的。 

#2.AssertionError
Thrown when an assertion has failed.  
2. 断言错误  
当断言失败时抛出。 

#3.AssertionFailedError
Thrown when an assertion failed.  
3. 断言失败错误  
当断言失败时抛出。 

#4.CoderMalfunctionError
A CoderMalfunctionError is thrown when the encoder/decoder is malfunctioning.  
4. 编码器故障错误  
CoderMalfunctionError在encoder/decoder发生故障时抛出。

#5.FactoryConfigurationError
Thrown when a problem with configuration with the Parser Factories exists. 
This error will typically be thrown when the class of a parser factory specified in the system properties cannot be found or instantiated.  
当解析器工厂的配置存在问题时抛出该异常。当找不到系统属性中指定的解析器工厂的类时，或者该类不能被实例化时，通常抛出此错误。 

#6.IOError
This error is thrown when a severe I/O error has happened.  
6. IO错误  
当服务器的I/O错误发生时抛出。 

#7.LinkageError
LinkageError is the superclass of all error classes that occur when loading and linking class files.  
LinkageError是所有加载和链接类文件时遇到错误的类的父类。 

#8.ServiceConfigurationError
Thrown when a service provider can't be loaded by ServiceLoader.  
8. 服务配置错误  
当ServiceLoader无法加载一个service provider时抛出

#9.ThreadDeath
ThreadDeath is thrown when a thread stops executing. It is used to aid in the orderly unrolling of the thread's stack (eg. cleanup of monitors).  
当线程停止运行时抛出。这是用于保持线程堆栈的有序（比如，清除监视）。

#10.TransformerFactoryConfigurationError
Thrown when a problem with configuration with the Transformer Factories exists.
This error will typically be thrown when the class of a transformation factory specified in the system properties cannot be found or instantiated.  
当通过 Transformer Factories 进行的配置存在问题时抛出此异常。当找不到或不能实例化系统属性中指定的转换工厂类时，通常抛出此错误。

#11.VirtualMachineError
VirtualMachineError is the superclass of all error classes that occur during the operation of the VM.  
11. 虚拟机错误  
VirtualMachineError是所有在操作虚拟机时发生的错误类的父类。 

#12.AbstractMethodError
Thrown by the VM when an abstract method is called.
Note that this can only occur when inconsistent class files have been loaded, since invoking an abstract method is a compile time error.  
12. 抽象方法错误  
当一个抽象方法被调用时由虚拟机抛出。  
注意，这只会在动态加载类文件时会发生，因为调用抽象方法错误是一个编译时的错误。 

#13.ClassCircularityError
Thrown when the VM notices that an attempt is made to load a class which would directly or indirectly inherit from one of its subclasses.
Note that this error can only occur when inconsistent class files are loaded, since it would normally be detected at compile time.  
13. 类循环依赖错误  
当VM（虚拟机）意识到企图加载一个类，会直接或间接地继承它的子类。  
注意，这只会在动态加载类文件时会发生，因为正常的话在编译时就会检测到这个错误。

#14.ClassFormatError
Thrown by a class loader when a class file has an illegal format or if the data that it contains can not be interpreted as a class.  
14. 类格式错误  
由类加载器在一个类文件格式非法或其包含的数据无法被解析为一个类时抛出。

#15.ExceptionInInitializerError
Thrown when an exception occurs during class initialization.  
15. 初始化错误异常
当类初始化发生异常时抛出。

#16.GenericSignatureFormatError
Indicates that a malformed signature has been encountered via a reflective method.  
16. 签名格式错误  
当需要解释类型、方法或构造方法的一般签名信息的反射方法遇到语法错误的签名属性时，抛出该错误。

#17.IllegalAccessError
Thrown when the runtime notices that a program tries to access a class or member which is not accessible from where it is referenced. Some examples are:
The superclass or an implemented interface is not accessible in the subclass.
Reading or writing an inaccessible field, e.g., a private field in another class.
Invoking an inaccessible method, e.g., the constructor of an inaccessible class, or a private method of another class.
Note that this can only occur when inconsistent class files have been loaded.  
17. 非法访问错误  
当应用程序试图访问或修改它不能访问的字段，或调用它不能访问的方法时，抛出该异常。  
例如：  
父类或实现的接口是无法在子类中访问的。  
读或写一个不能访问的域，比如，另一个类中的私有域。  
调用一个不能访问的方法，比如，不能访问的累的构造器，或另一个类中的私有方法。  
注意，这只会在动态加载类文件时会发生。

#18.IncompatibleClassChangeError
IncompatibleClassChangeError is the superclass of all classes which represent errors that occur when inconsistent class files are loaded into the same running image.  
18. 不兼容的类更改错误  
IncompatibleClassChangeError是当动态加载累文件到相同的运行时场景时的所有表示错误的类的父类。

#19.InstantiationError
Thrown when the VM notices that a program tries to create a new instance of a class which has no visible constructors from the location where new is invoked.
Note that this can only occur when inconsistent class files are being loaded.  
19. 实例化错误  
当虚拟机（VM）注意到应用程序试图使用 Java 的 new 结构来实例化一个类而其却没有一个可见的构造器时抛出该异常。  
注意，这只会在动态加载类文件时会发生。

#20.InternalError
Thrown when the VM notices that it has gotten into an undefined state.  
20. 内部错误  
当虚拟机（VM）注意到其进入一个未定义的状态时抛出该异常。

#21.NoClassDefFoundError
Thrown when the VM is unable to locate a class which it has been asked to load.  
21. 未定义类错误  
当虚拟机（VM）无法定位其要加载的类时抛出。

#22.NoSuchFieldError
Thrown when the VM notices that a program tries to reference, on a class or object, a field that does not exist.
Note that this can only occur when inconsistent class files are being loaded.  
22. 无此字段错误  
当虚拟机（VM）注意到程序试图引用一个类或对象的某个字段不存在是抛出。  
注意，这只会在动态加载类文件时会发生。

#23.NoSuchMethodError
Thrown when the VM notices that a program tries to reference, on a class or object, a method that does not exist.  
23. 无此方法错误  
当虚拟机（VM）注意到程序试图引用一个类或对象的某个字段不存在是抛出。

#24.OutOfMemoryError
Thrown when a request for memory is made that can not be satisfied using the available platform resources.  
24. 内存不足错误  
当现有平台资源无法满足请求的内存时抛出

#25.StackOverflowError
Thrown when the depth of the stack of the running program exceeds some platform or VM specific limit.  
25. 堆栈溢出错误  
当运行程序的堆栈的深度超过某些平台或虚拟机（VM）的限定时抛出。

#26.UnknownError
Thrown when the VM must throw an error which does not match any known exceptional condition.  
26. 未知错误  
当虚拟机（VM）抛出一个未知错误时抛出该异常。

#27.UnsatisfiedLinkError
Thrown when an attempt is made to invoke a native for which an implementation could not be found.  
27. 不满足链接错误  
当试图调用一个native方法而其实现无法找到是抛出。

#28.UnsupportedClassVersionError
Thrown when an attempt is made to load a class with a format version that is not supported by the VM.  
28. 不支持类版本错误  
当试图加载一个类而其格式版本不被虚拟机（VM）支持时抛出。

#29.VerifyError
Thrown when the VM notices that an attempt is made to load a class which does not pass the class verification phase.  
29. 验证错误  
当虚拟机（VM）注意到试图加载一个类而其无法通过类验证时抛出。

#30.ZipError
Thrown when an unrecoverable zip error has occurred.  
30. ZipError  
当发生不可恢复的zip错误时抛出。

#31.AccountsException

#32.AclNotFoundException
The exception, that is thrown when a reference to a non-existent Access Control List (ACL) is made.  
当引用不存在的 ACL（访问控制列表）时抛出该异常。

#33.AndroidException
Base class for all checked exceptions thrown by the Android frameworks.  
Android frameworks抛出的所有异常的基类。

#34.BackingStoreException
An exception to indicate that an error was encountered while accessing the backing store.  
当访问内部存储反生错误时抛出该异常。

#35.BrokenBarrierException
Exception thrown when a thread tries to wait upon a barrier that is in a broken state, or which enters the broken state while the thread is waiting.  
当线程试图试图等待处于断开状态的 barrier 时，或barrier进入断开状态而线程处于等待状态时，抛出该异常。

#36.CertificateException
The base class for all Certificate related exceptions.  
所有证书相关的异常的基类。

#37.CloneNotSupportedException
Thrown when a program attempts to clone an object which does not support the Cloneable interface.  
当程序试图克隆一个不支持Cloneable接口的对象时抛出该异常。

#38.DataFormatException
DataFormatException is used to indicate an error in the format of a particular data stream which is to be uncompressed.  
DataFormatException用于指出欲解压的特定数据流的格式错误。

#39.DatatypeConfigurationException
Indicates a serious configuration error.  
指示严重的配置错误。

40.DestroyFailedException
Signals that the destroy() method failed.  
标志destroy()方法失败。

#41.ErrnoException
A checked exception thrown when Os methods fail. This exception contains the native errno value, for comparison against the constants in OsConstants,
should sophisticated callers need to adjust their behavior based on the exact failure.  
当OS方法失败是抛出。该异常包含原生的errno，对比于OsConstants中的常量，富有经验的调用者需要基于精确失败调整他们的行为。

#42.ExecutionException
Exception thrown when attempting to retrieve the result of a task that aborted by throwing an exception. This exception can be inspected using the getCause() method.  
当试图获取已通过抛出异常而中止的任务的结果时，抛出此异常。可以使用getCause()方法来检查此异常。

#43.FormatException

#44.GeneralSecurityException
GeneralSecurityException is a general security exception and the superclass for all security specific exceptions.  
GeneralSecurityException是一个一般的安全异常，并且是所有安全相关的异常的基类。

#45.IOException
Signals a general, I/O-related error.  
标志一个一般的I/O相关的错误。

#46.InterruptedException
Thrown when a waiting thread is activated before the condition it was waiting for has been satisfied.  
当等待线程在其等待的条件满足前被激活时抛出该异常。

#47.InvalidPreferencesFormatException
An exception to indicate that the input XML file is not well-formed or could not be validated against the appropriate document type (specified by in the Preferences).  
一个异常指示出输入的XML文件不是很好的格式化或者根据适当的文件类型（在Preferences中指定的）能被验证。

#48.JSONException
Thrown to indicate a problem with the JSON API.  
抛出用于指示出使用JSON API的问题。

#49.KeyChainException
Thrown on problems accessing the KeyChain.  
访问KeyChain发生问题时抛出。

#50.LastOwnerException
The exception that is thrown when an attempt is made to remove the the last Owner from an Owner.  
当试图删除访问控制列表的最后一个所有者，则抛出该异常。 

#51.MediaCryptoException
Exception thrown if MediaCrypto object could not be instantiated or if unable to perform an operation on the MediaCrypto object.  
当MediaCrypto对象无法被实例化，或无法完成对MediaCrypto对象的操作时抛出该异常。

#52.MediaDrmException
Base class for MediaDrm exceptions
MediaDrm异常的基类。

#53.NotOwnerException
The exception that is thrown when an action that requires ownership is attempted by a principal that is not an owner of the object for which ownership is required.  
当只允许对象的所有者修改对象，但是试图进行修改的 principal 不是所有者时，抛出该异常。 

#54.OperationApplicationException
Thrown when an application of a ContentProviderOperation fails due the specified constraints.  
当ContentProviderOperation的应用由于特定的约束失败时抛出该异常。

#55.ParseException
Thrown when the string being parsed is not in the correct form.  
当字符串解析遇到不正确的格式时抛出该异常。

#56.ParserConfigurationException
Indicates a serious configuration error.  
指示一个严重的配置错误。 

#57.PrivilegedActionException
Legacy security code; do not use.  
遗留的安全代码，不使用。

#58.ReflectiveOperationException
Superclass of exceptions related to reflection.  
反射相关的异常的基类。

#59.RuntimeException
RuntimeException is the superclass of all classes that represent exceptional conditions which occur as a result of executing an application in the VM.  
RuntimeException是所有运行时异常类的父类。

#60.SAXException
Encapsulate a general SAX error or warning.  
封装一般的 SAX 错误或警告。

#61.SQLException
An exception that indicates a failed JDBC operation.  
指示出JDBC操作失败的异常。

#62.SipException
Indicates a general SIP-related exception.  
指示一般SIP相关的异常。

#63.TimeoutException
Exception thrown when a blocking operation times out.  
阻塞操作超时时，抛出该异常。

#64.TooManyListenersException
A TooManyListenersException is thrown when an attempt is made to add more than one listener to an event source which only supports a single listener.

#65.TransformerException
This class specifies an exceptional condition that occurred during the transformation process.

#66.URISyntaxException
A URISyntaxException will be thrown if some information could not be parsed while creating a URI.

#67.UnsupportedCallbackException
Thrown when a CallbackHandler does not support a particular Callback.

#68.XPathException
XPathException represents a generic XPath exception.

#69.XmlPullParserException
This exception is thrown to signal XML Pull Parser related faults.

#70.AEADBadTagException
Thrown by a Cipher that is using an Authenticated Encryption with Additional Data (AEAD) mode such as Galois/Counter Mode (GCM) and the tag failed verification.

#71.AccessControlException
AccessControlException is thrown if the access control infrastructure denies protected access due to missing permissions.

#72.ActivityNotFoundException
This exception is thrown when a call to startActivity(Intent) or one of its variants fails because an Activity can not be found to execute the given Intent.

#73.AlreadyConnectedException
An AlreadyConnectedException is thrown when an attempt is made to connect a SocketChannel that is already connected.

#74.AndroidRuntimeException
Base class for all unchecked exceptions thrown by the Android frameworks.

#75.AnnotationTypeMismatchException
Indicates that an annotation type has changed since it was compiled or serialized.

#76.ArithmeticException
Thrown when the an invalid arithmetic operation is attempted.

#77.ArrayIndexOutOfBoundsException
Thrown when the an array is indexed with a value less than zero, or greater than or equal to the size of the array.
 
#78.ArrayStoreException
Thrown when a program attempts to store an element of an incompatible type in an array.

#79.AsynchronousCloseException
An AsynchronousCloseException is thrown when the underlying channel for an I/O operation is closed by another thread.
 
#80.BadPaddingException
The exception that is thrown when a padding mechanism is expected for the input data, but the input data does not have the proper padding bytes.
 
#81.BadParcelableException
The object you are calling has died, because its hosting process no longer exists.

#82.Base64DataException
This exception is thrown by Base64InputStream or Base64OutputStream when an error is detected in the data being decoded.

#83.BatchUpdateException
This exception is thrown if a problem occurs during a batch update operation.

#84.BindException
A BindException is thrown when a process cannot bind a local address/port, either because it is already bound or reserved by the OS.

#85.BufferOverflowException
A BufferOverflowException is thrown when elements are written to a buffer but there is not enough remaining space in the buffer.

#86.BufferUnderflowException
A BufferUnderflowException is thrown when elements are read from a buffer but there are not enough remaining elements in the buffer.

#87.CRLException
The exception that is thrown if errors occur during handling of CRLs.

#88.CameraAccessException
CameraAccessException is thrown if a camera device could not be queried or opened by the CameraManager, or if the connection to an opened CameraDevice is no longer valid.
 
#89.CancellationException
Exception indicating that the result of a value-producing task, such as a FutureTask, cannot be retrieved because the task was cancelled.

#90.CancelledKeyException
A CancelledKeyException is thrown when an invalid selection key is used.

#91.CertPathBuilderException
The exception that is thrown when a CertPathBuilder method fails.

#92.CertPathValidatorException
The exception that is thrown when a certification path (or certificate chain) cannot be validated.

#93.CertStoreException
The exception that is thrown when an access to a CertStore fails.
 
#94.CertificateEncodingException
The exception that is thrown when an error occurs while a Certificate is being encoded.
 
#95.CertificateException
The base class for all Certificate related exceptions.

#96.CertificateExpiredException
The exception that is thrown when a Certificate has expired.

#97.CertificateNotYetValidException
The exception that is thrown when a Certificate is not yet valid or will not yet be valid on a specified date.

#98.CertificateParsingException
The exception that is thrown when a Certificate can not be parsed.

#99.CharConversionException
The top level class for character conversion exceptions.
 
#100.CharacterCodingException
A CharacterCodingException is thrown when an encoding or decoding error occurs.

#101.ClassCastException
Thrown when a program attempts to cast a an object to a type with which it is not compatible.

#102.ClassNotFoundException
Thrown when a class loader is unable to find a class.

#103.ClosedByInterruptException
A ClosedByInterruptException is thrown when a thread is interrupted in a blocking I/O operation.
 
#104.ClosedChannelException
A ClosedChannelException is thrown when a channel is closed for the type of operation attempted.

#105.ClosedSelectorException
A ClosedSelectorException is thrown when a selector is closed and an I/O operation is attempted.

#106.ConcurrentModificationException
An ConcurrentModificationException is thrown when a Collection is modified and an existing iterator on the Collection is used to modify the Collection as well.

#107.ConnectException
A ConnectException is thrown if a connection cannot be established to a remote host on a specific port.

#108.ConnectTimeoutException
This class was deprecated in API level 22. Please use openConnection() instead. Please visit this webpage for further details.
 
#109.ConnectionPendingException
A ConnectionPendingException is thrown when an attempt is made to connect a SocketChannel that has a non-blocking connection already underway.

#110.CursorIndexOutOfBoundsException
An exception indicating that a cursor is out of bounds.

#111.DOMException
DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation is impossible to perform (either for logical reasons, because data is lost, or because the implementation has become unstable).

#112.DataTruncation
An exception which is thrown when a JDBC driver unexpectedly truncates a data value either when reading (resulting in warning), or when writing data (resulting in an error).

#113.DeadObjectException
The object you are calling has died, because its hosting process no longer exists.

#114.DeniedByServerException
Exception thrown when the provisioning server or key server denies a certficate or license for a device.

#115.DigestException
DigestException is a general message digest exception.
 
#116.DuplicateFormatFlagsException
The unchecked exception will be thrown out if there are duplicate flags given out in the format specifier.

#117.EOFException
Thrown when a program encounters the end of a file or stream during an input operation.

#118.EmptyStackException
An EmptyStackException is thrown if the pop/peek method of a stack is executed on an empty stack.
 
#119.EnumConstantNotPresentException
Thrown if an enum constant does not exist for a particular name.

#120.ExemptionMechanismException
This is the base class for ExemptionMechanismException.
 
#121.FileLockInterruptionException
A FileLockInterruptionException is thrown when a thread is interrupted while waiting to acquire a file lock.
 
#122.FileNotFoundException
Thrown when a file specified by a program cannot be found.
 
#123.FormatFlagsConversionMismatchException
A FormatFlagsConversionMismatchException will be thrown if a conversion and the flags are incompatible.

#124.FormatterClosedException
A FormatterClosedException will be thrown if the formatter has been closed.

#125.Fragment.InstantiationException
Thrown by instantiate(Context, String, Bundle) when there is an instantiation failure.

#126.GLException
An exception class for OpenGL errors.

#127.HttpRetryException
If a HTTP request has to be retried, this exception will be thrown if the request cannot be retried automatically.

#128.IllegalAccessException
Thrown when a program attempts to access a field or method which is not accessible from the location where the reference is made.

#129.IllegalArgumentException
Thrown when a method is invoked with an argument which it can not reasonably deal with.

#130.IllegalBlockSizeException
The exception, that is thrown when the data length provided to a block cipher does not match the block size of the cipher.

#131.IllegalBlockingModeException
An IllegalBlockingModeException is thrown when an operation that requires a specific blocking mode is invoked on a channel that is in a different blocking mode.

#132.IllegalCharsetNameException
An IllegalCharsetNameException is thrown when an illegal charset name is encountered.

#133.IllegalFormatCodePointException
An IllegalFormatCodePointException will be thrown if an invalid Unicode code point (defined by isValidCodePoint(int)) is passed as a parameter to a Formatter.
 
#134.IllegalFormatConversionException
An IllegalFormatConversionException will be thrown when the parameter is incompatible with the corresponding format specifier.

#135.IllegalFormatException
An IllegalFormatException is thrown when a format string that contains either an illegal syntax or format specifier is transferred as a parameter.
 
#136.IllegalFormatFlagsException
An IllegalFormatFlagsException will be thrown if the combination of the format flags is illegal.

#137.IllegalFormatPrecisionException
An IllegalFormatPrecisionException will be thrown if the precision is a negative other than -1 or in other cases where precision is not supported.

#138.IllegalFormatWidthException
An IllegalFormatWidthException will be thrown if the width is a negative value other than -1 or in other cases where a width is not supported.

#139.IllegalMonitorStateException
Thrown when a monitor operation is attempted when the monitor is not in the correct state, for example when a thread attempts to exit a monitor which it does not own.
 
#140.IllegalSelectorException
An IllegalSelectorException is thrown when a call is made to register a channel on a selector that has been created by a different provider.

#141.IllegalStateException
Thrown when an action is attempted at a time when the VM is not in the correct state.

#142.IllegalThreadStateException
Thrown when an operation is attempted which is not possible given the state that the executing thread is in.

#143.IllformedLocaleException
Thrown when a locale subtag or field is not well formed.

#144.IncompleteAnnotationException
Indicates that an element of an annotation type was accessed that was added after the type was compiled or serialized.

#145.IndexOutOfBoundsException
Thrown when a program attempts to access a value in an indexable collection using a value which is outside of the range of valid indices.

#146.InflateException
This exception is thrown by an inflater on error conditions.

#147.InputMismatchException
An InputMismatchException is thrown by a scanner to indicate that the next token does not match or is out of range for the type specified in the pattern.

#148.InstantiationException
Thrown when a program attempts to access a constructor which is not accessible from the location where the reference is made.

#149.IntentFilter.MalformedMimeTypeException
This exception is thrown when a given MIME type does not have a valid syntax.

#150.IntentSender.SendIntentException
Exception thrown when trying to send through a PendingIntent that has been canceled or is otherwise no longer able to execute the request.

#151.InterruptedIOException
Signals that a blocking I/O operation has been interrupted.
 
#152.InvalidAlgorithmParameterException
InvalidAlgorithmParameterException indicates the occurrence of invalid algorithm parameters.

#153.InvalidClassException
Signals a problem during the serialization or or deserialization of an object.

#154.InvalidKeyException
InvalidKeyException indicates exceptional conditions, caused by an invalid key.

#155.InvalidKeySpecException
The exception that is thrown when an invalid key specification is encountered.

#156.InvalidMarkException
An InvalidMarkException is thrown when reset() is called on a buffer, but no mark has been set previously.

#157.InvalidObjectException
Signals that, during deserialization, the validation of an object has failed.

#158.InvalidParameterException
InvalidParameterException indicates exceptional conditions, caused by invalid parameters.

#159.InvalidParameterSpecException
The exception that is thrown when an invalid parameter specification is encountered.

#160.InvalidPropertiesFormatException
An InvalidPropertiesFormatException is thrown if loading the XML document defining the properties does not follow the Properties specification.
 
#161.InvocationTargetException
This class provides a wrapper for an exception thrown by a Method or Constructor invocation.

#162.JarException
This runtime exception is thrown when a problem occurs while reading a JAR file.

#163.KeyCharacterMap.UnavailableException
Thrown by load(int) when a key character map could not be loaded.

#164.KeyException
KeyException is the common superclass of all key related exceptions.

#165.KeyExpiredException
Indicates that a cryptographic operation failed because the employed key's validity end date is in the past.

#166.KeyManagementException
KeyManagementException is a general exception, thrown to indicate an exception during processing an operation concerning key management.

#167.KeyNotYetValidException
Indicates that a cryptographic operation failed because the employed key's validity start date is in the future.

#168.KeyPermanentlyInvalidatedException
Indicates that the key can no longer be used because it has been permanently invalidated.

#169.KeyStoreException
KeyStoreException is a general KeyStore exception.

#170.LSException
Parser or write operations may throw an LSException if the processing is stopped.

#171.LoginException
Base class for exceptions that are thrown when a login error occurs.

#172.MalformedInputException
A MalformedInputException is thrown when a malformed input is encountered, for example if a byte sequence is illegal for the given charset.

#173.MalformedJsonException
Thrown when a reader encounters malformed JSON.

#174.MalformedParameterizedTypeException
Indicates that a malformed parameterized type has been encountered by a reflective method.

#175.MalformedURLException
This exception is thrown when a program attempts to create an URL from an incorrect specification.

#176.MediaCodec.CodecException
Thrown when an internal codec error occurs.

#177.MediaCodec.CryptoException
Thrown when a crypto error occurs while queueing a secure input buffer.

#178.MediaDrm.MediaDrmStateException
Thrown when an unrecoverable failure occurs during a MediaDrm operation.

#179.MediaDrmResetException
This exception is thrown when the MediaDrm instance has become unusable due to a restart of the mediaserver process.

#180.MissingFormatArgumentException
A MissingFormatArgumentException will be thrown if there is no corresponding argument with the specified conversion or an argument index that refers to a missing argument.
 
#181.MissingFormatWidthException
A MissingFormatWidthException will be thrown if the format width is missing but is required.

#182.MissingResourceException
A MissingResourceException is thrown by ResourceBundle when a resource bundle cannot be found or a resource is missing from a resource bundle.

#183.NegativeArraySizeException
Thrown when an attempt is made to create an array with a size of less than zero.
 
#184.NetworkOnMainThreadException
The exception that is thrown when an application attempts to perform a networking operation on its main thread.

#185.NoConnectionPendingException
A NoConnectionPendingException is thrown if SocketChannel's finishConnect method is called before the SocketChannel's connect(java.net.SocketAddress) connect} method completed without error.

#186.NoRouteToHostException
The NoRouteToHostException will be thrown while attempting to connect to a remote host but the host cannot be reached for instance because of a badly configured router or a blocking firewall.

#187.NoSuchAlgorithmException
NoSuchAlgorithmException indicates that a requested algorithm could not be found.

#188.NoSuchElementException
Thrown when trying to retrieve an element past the end of an Enumeration or Iterator.

#189.NoSuchFieldException
Thrown when the VM notices that a program tries to reference, on a class or object, a field that does not exist.

#190.NoSuchMethodException
Thrown when the VM notices that a program tries to reference, on a class or object, a method that does not exist.

#191.NoSuchPaddingException
The exception that is thrown when the requested padding mechanism is not supported.

#192.NoSuchPropertyException
Thrown when code requests a Property on a class that does not expose the appropriate method or field.

#193.NoSuchProviderException
NoSuchProviderException indicates that a requested security provider could not be found.

#194.NonReadableChannelException
A NonReadableChannelException is thrown when attempting to read from a channel that is not open for reading.

#195.NonWritableChannelException
A NonWritableChannelException is thrown when attempting to write to a channel that is not open for writing.

#196.NotActiveException
Signals that a serialization-related method has been invoked in the wrong place.

#197.NotProvisionedException
Exception thrown when an operation on a MediaDrm object is attempted and the device does not have a certificate.

#198.NotSerializableException
Signals that an object that is not serializable has been passed into the ObjectOutput.writeObject() method.

#199.NotYetBoundException
A NotYetBoundException is thrown if the server socket channel is not bound before an I/O operation is made.

#200.NotYetConnectedException
A NotYetConnectedException is thrown if the socket channel is not connected before an I/O operation is invoked.

#201.NullPointerException
Thrown when a program tries to access a field or method of an object or an element of an array when there is no instance or array to use, that is if the object or array points to null.

#202.NumberFormatException
Thrown when an invalid value is passed to a string-to-number conversion method.

#203.ObjectStreamException
Signals some sort of problem during either serialization or deserialization of objects.

#204.OperationCanceledException
An exception type that is thrown when an operation in progress is canceled.

#205.OptionalDataException
Signals that the ObjectInputStream class encountered a primitive type (int, char etc.) instead of an object instance in the input stream.

#206.OverlappingFileLockException
An OverlappingFileLockException is thrown when attempting to acquire a lock that overlaps an existing or pending lock held by this process.

#207.PackageManager.NameNotFoundException
This exception is thrown when a given package, application, or component name cannot be found.

#208.ParcelFileDescriptor.FileDescriptorDetachedException
Exception that indicates that the file descriptor was detached.

#209.ParcelFormatException
The contents of a Parcel (usually during unmarshalling) does not contain the expected data.

#210.ParseException
Thrown when parsing a URL fails.
当解析URL失败时抛出。

#211.PatternSyntaxException
Encapsulates a syntax error that occurred during the compilation of a Pattern.

#212.PendingIntent.CanceledException
Exception thrown when trying to send through a PendingIntent that has been canceled or is otherwise no longer able to execute the request.

#213.PortUnreachableException
This PortUnreachableException will be thrown if an ICMP_Port_Unreachable message has been received.

#214.ProtocolException
Signals that either a connection attempt to a socket of the wrong type, the application of an unsupported operation or that a general error in the underlying protocol has occurred.

#215.ProviderException
ProviderException is a general exception, thrown by security Providers.

#216.RSDriverException
Base class for all exceptions thrown by the Android RenderScript
 
#217.RSIllegalArgumentException
Base class for all exceptions thrown by the Android RenderScript 

#218.RSInvalidStateException
Base class for all exceptions thrown by the Android RenderScript

#219.RSRuntimeException
Base class for all exceptions thrown by the Android RenderScript  

#220.ReadOnlyBufferException
A ReadOnlyBufferException is thrown when some write operation is called on a read-only buffer.

#221.ReceiverCallNotAllowedException
This exception is thrown from registerReceiver(BroadcastReceiver, IntentFilter) and bindService(Intent, ServiceConnection, int) when these methods are being used from an BroadcastReceiver component.

#222.RejectedExecutionException
Exception thrown by an Executor when a task cannot be accepted for execution.

#223.RemoteException
Parent exception for all Binder remote-invocation errors
 
#224.RemoteViews.ActionException
Exception to send when something goes wrong executing an action  

#225.ResourceBusyException
Exception thrown when an operation on a MediaDrm object is attempted and hardware resources are not available, due to being in use.

#226.Resources.NotFoundException
This exception is thrown by the resource APIs when a requested resource can not be found.

#227.SAXNotRecognizedException
Exception class for an unrecognized identifier.

#228.SAXNotSupportedException
Exception class for an unsupported operation.

#229.SAXParseException
Encapsulate an XML parse error or warning.

#230.SQLClientInfoException
An exception, which is subclass of SQLException, is thrown when one or more client info properties could not be set on a Connection.

#231.SQLDataException
An exception, which is subclass of SQLException, is thrown when various data errors arise.
 
#232.SQLException
An exception that indicates there was an error with SQL parsing or execution.

#233.SQLFeatureNotSupportedException
An exception, which is subclass of SQLNonTransientException, is thrown when various the JDBC driver does not support an optional JDBC feature.

#234.SQLIntegrityConstraintViolationException
An exception, which is subclass of SQLNonTransientException, is thrown when various the an integrity constraint (foreign key, primary key or unique key) has been violated.

#235.SQLInvalidAuthorizationSpecException
An exception, which is subclass of SQLNonTransientException, is thrown when the authorization credentials presented during connection establishment are not valid.

#236.SQLNonTransientConnectionException
An exception, which is subclass of SQLException, is thrown when the connection operation that failed will not succeed when the operation is retried without the cause of the failure being corrected.
 
#237.SQLWarning
An exception class that holds information about Database access warnings.

#238.SQLiteAbortException
An exception that indicates that the SQLite program was aborted.

#239.SQLiteAccessPermException
This exception class is used when sqlite can't access the database file due to lack of permissions on the file.

#240.SQLiteBindOrColumnIndexOutOfRangeException
Thrown if the the bind or column parameter index is out of range  

#241.SQLiteConstraintException
An exception that indicates that an integrity constraint was violated.

#242.SQLiteDatabaseCorruptException
An exception that indicates that the SQLite database file is corrupt.

#243.SQLiteDatabaseLockedException
Thrown if the database engine was unable to acquire the database locks it needs to do its job.
 
#244.SQLiteDiskIOException
An exception that indicates that an IO error occured while accessing the SQLite database file.

#245.SQLiteDoneException
An exception that indicates that the SQLite program is done.

#246.SQLiteException
A SQLite exception that indicates there was an error with SQL parsing or execution.

#247.SQLiteFullException
An exception that indicates that the SQLite database is full.
 
#248.SQLiteMisuseException
This error can occur if the application creates a SQLiteStatement object and allows multiple threads in the application use it at the same time.

#249.SSLException
The base class for all SSL related exceptions.

#250.SSLHandshakeException
The exception that is thrown when a handshake could not be completed successfully.

#251.SSLKeyException
The exception that is thrown when an invalid SSL key is encountered.

#252.SSLPeerUnverifiedException
The exception that is thrown when the identity of a peer has not been verified.

#253.SSLProtocolException
The exception that is thrown when an error in the operation of the SSL protocol is encountered.

#254.SecurityException
Thrown when a security manager check fails.

#255.ShortBufferException
The exception that is thrown when the result of an operation is attempted to store in a user provided buffer that is too small.

#256.SignatureException
SignatureException is a general Signature exception.

#257.SocketException
This SocketException may be thrown during socket creation or setting options, and is the superclass of all other socket related exceptions.

#258.SocketTimeoutException
This exception is thrown when a timeout expired on a socket read or accept operation.

#259.StaleDataException
This exception is thrown when a Cursor contains stale data and must be requeried before being used again.

#260.StreamCorruptedException
Signals that the readObject() method could not read an object due to missing information (for example, a cyclic reference that doesn't match a previous instance, or a missing class descriptor for the object to be loaded).
 
#261.StringIndexOutOfBoundsException
Thrown when the a string is indexed with a value less than zero, or greater than or equal to the size of the array.

#262.Surface.OutOfResourcesException
Exception thrown when a Canvas couldn't be locked with lockCanvas(Rect), or when a SurfaceTexture could not successfully be allocated.

#263.SurfaceHolder.BadSurfaceTypeException
Exception that is thrown from lockCanvas() when called on a Surface whose type is SURFACE_TYPE_PUSH_BUFFERS.

#264.SyncFailedException
Signals that the sync() method has failed to complete.

#265.TransactionTooLargeException
The Binder transaction failed because it was too large.

#266.TransformerConfigurationException
Indicates a serious configuration error.

#267.TypeNotPresentException
Thrown when a program tries to access a class, interface, enum or annotation type through a string that contains the type's name and the type cannot be found.

#268.UTFDataFormatException
Signals that an incorrectly encoded UTF-8 string has been encountered, most likely while reading some DataInputStream.

#269.UndeclaredThrowableException
This class provides a wrapper for an undeclared, checked exception thrown by an InvocationHandler.
 
#270.UnknownFormatConversionException
An UnknownFormatConversionException will be thrown if the format conversion is unknown.

#271.UnknownFormatFlagsException
An UnknownFormatFlagsException will be thrown if there is an unknown flag.

#272.UnknownHostException
Thrown when a hostname can not be resolved.
 
#273.UnknownServiceException
Is thrown if no appropriate ContentHandler could be found for a particular service requested by the URL connection.

#274.UnmappableCharacterException
An UnmappableCharacterException is thrown when an unmappable character for the given charset is encountered.

#275.UnrecoverableEntryException
UnrecoverableEntryException indicates, that a KeyStore.Entry cannot be recovered from a KeyStore.

#276.UnrecoverableKeyException
UnrecoverableKeyException indicates, that a key cannot be recovered from a KeyStore.

#277.UnresolvedAddressException
An UnresolvedAddressException is thrown when trying to use an unresolved network address in a network operation.

#278.UnsupportedAddressTypeException
An UnsupportedAddressTypeException is thrown when connecting or binding to an unsupported address type.

#279.UnsupportedCharsetException
An UnsupportedCharsetException is thrown when an unsupported charset name is encountered.

#280.UnsupportedEncodingException
Thrown when a program asks for a particular character converter that is unavailable.

#281.UnsupportedOperationException
Thrown when an unsupported operation is attempted.

#282.UnsupportedSchemeException
Exception thrown when an attempt is made to construct a MediaDrm object using a crypto scheme UUID that is not supported by the device  

#283.UserNotAuthenticatedException
Indicates that a cryptographic operation could not be performed because the user has not been authenticated recently enough.

#284.WindowManager.BadTokenException
Exception that is thrown when trying to add view whose WindowManager.LayoutParams token is invalid.

#285.WindowManager.InvalidDisplayException
Exception that is thrown when calling addView(View, ViewGroup.LayoutParams) to a secondary display that cannot be found.

#286.WriteAbortedException
Signals that the readObject() method has detected an exception marker in the input stream.

#287.XPathExpressionException
XPathExpressionException represents an error in an XPath expression.

#288.XPathFactoryConfigurationException
XPathFactoryConfigurationException represents a configuration error in a XPathFactory environment.

#289.XPathFunctionException
XPathFunctionException represents an error with an XPath function.

#290.ZipException
This runtime exception is thrown by ZipFile and ZipInputStream when the file or stream is not a valid zip file.
此异常由ZipFile和ZipInputStream在文件或流不是一个合法的zip文件时抛出


