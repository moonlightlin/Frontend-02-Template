学习笔记

### 使用LL算法构建AST

#### 四则运算

```
<Expression> ::= <AdditiveExpression><EOF>

<AdditiveExpression> ::= 
	<MultiplicativeExpression> |
	<AdditiveExpression><+><MultiplicativeExpression> |
	<AdditiveExpression><-><MultiplicativeExpression>
	
<MultiplicativeExpression> ::=
	<Number> |
	<MultiplicativeExpression><*><Number> |
	<MultiplicativeExpression></><Number>
```



